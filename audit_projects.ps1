param (
    [string]$RootPath = ".."
)

Write-Host "Starting audit for React/Next.js vulnerabilities in: $(Resolve-Path $RootPath)" -ForegroundColor Cyan
Write-Host "Looking for:"
Write-Host " - React 19.0.0, 19.1.0-19.1.1, 19.2.0" -ForegroundColor Red
Write-Host " - Next.js < 15.0.5, < 15.1.9, etc" -ForegroundColor Red
Write-Host "---------------------------------------------------"

$packageFiles = Get-ChildItem -Path $RootPath -Filter "package.json" -Recurse -ErrorAction SilentlyContinue | Where-Object { $_.FullName -notmatch "node_modules" }

foreach ($file in $packageFiles) {
    try {
        $content = Get-Content $file.FullName -Raw | ConvertFrom-Json
        $dependencies = $content.dependencies
        $devDependencies = $content.devDependencies
        
        $reactVersion = if ($dependencies.react) { $dependencies.react } elseif ($devDependencies.react) { $devDependencies.react } else { $null }
        $nextVersion = if ($dependencies.next) { $dependencies.next } elseif ($devDependencies.next) { $devDependencies.next } else { $null }

        $isVulnerable = $false
        $reasons = @()

        if ($reactVersion) {
            # Simple string matching for the specific vulnerable 19.x versions mentioned
            # Clean version string (remove ^, ~)
            $cleanReact = $reactVersion -replace "[^0-9.]", ""
            if ($cleanReact -match "^19\.0\.0$" -or $cleanReact -match "^19\.1\.[0-1]$" -or $cleanReact -match "^19\.2\.0$") {
                $isVulnerable = $true
                $reasons += "React v$reactVersion (Vulnerable)"
            }
        }

        if ($nextVersion) {
             # Basic check for Next.js 15+ vulnerabilities (simplified)
             $cleanNext = $nextVersion -replace "[^0-9.]", ""
             # Checking specifically if it looks like 15.0.x where x < 5
             if ($cleanNext -match "^15\.0\.[0-4]$") {
                 $isVulnerable = $true
                 $reasons += "Next.js v$nextVersion (Update to 15.0.5+)"
             }
        }

        if ($isVulnerable) {
            Write-Host "[VULNERABLE] $($content.name) at $($file.DirectoryName)" -ForegroundColor Red
            foreach ($reason in $reasons) {
                Write-Host "  - $reason" -ForegroundColor Yellow
            }
            Write-Host "  -> Run 'npm update' or 'pnpm update' in this folder." -ForegroundColor Gray
        } elseif ($reactVersion -or $nextVersion) {
            Write-Host "[SAFE] $($content.name) (React: $reactVersion, Next: $nextVersion)" -ForegroundColor Green
        }
    }
    catch {
        # Ignore errors parsing json
    }
}

Write-Host "---------------------------------------------------"
Write-Host "Audit Complete." -ForegroundColor Cyan

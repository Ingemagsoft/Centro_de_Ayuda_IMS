param(
  [switch]$Clean
)

$ErrorActionPreference = 'Stop'
Write-Host "=== IMS | Serve Social Cards (local) ===" -ForegroundColor Cyan

# 1) Activar venv
$venv = Join-Path $PSScriptRoot '..\.venv\Scripts\Activate.ps1'
if (-not (Test-Path $venv)) {
  Write-Error "No se encontró .venv. Crea el entorno con:  py -3.13 -m venv .venv  &&  .\.venv\Scripts\Activate.ps1  &&  pip install -r requirements.txt"
}
. $venv
Write-Host "Venv activado."

# 2) Habilitar Social Cards por variable de entorno
$env:IMS_SOCIAL = "true"
Write-Host "IMS_SOCIAL=true (plugin social habilitado)."

# 3) Agregar DLLs de MSYS2 (UCRT64) al PATH (para CairoSVG)
$msys = "C:\msys64\ucrt64\bin"
if (Test-Path $msys) {
  $env:PATH = "$msys;$env:PATH"
  Write-Host "PATH actualizado con $msys"
} else {
  Write-Warning "No se encontró $msys. Si CairoSVG falla, instala MSYS2 UCRT64 y verifica esta ruta."
}

# 4) Limpiezas opcionales
if ($Clean) {
  Write-Host "Limpiando cachés..." -ForegroundColor DarkYellow
  Remove-Item -Recurse -Force -ErrorAction SilentlyContinue ".cache"
  Remove-Item -Recurse -Force -ErrorAction SilentlyContinue "site"
}
# Fuerza regeneración de Social Cards
Remove-Item -Recurse -Force -ErrorAction SilentlyContinue ".cache\material\social"

# 5) Info útil y serve
python --version
mkdocs --version
Write-Host "Abriendo servidor local en http://127.0.0.1:8000" -ForegroundColor Green
mkdocs serve -a 127.0.0.1:8000

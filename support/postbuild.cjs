const fs = require('node:fs');
const path = require('node:path');

function clearPackageJson() {
  const projectDir = process.cwd();
  const targetPath = path.resolve(projectDir, 'build');
  const filename = path.resolve(targetPath, 'package.json');
  const json = JSON.parse(fs.readFileSync(filename, 'utf-8'));
  delete json.private;
  delete json.scripts;
  delete json.devDependencies;
  fs.writeFileSync(
    path.resolve(targetPath, 'package.json'),
    JSON.stringify(json, undefined, 2),
  );
  fs.copyFileSync(
    path.resolve(targetPath, './types/index.d.ts'),
    path.resolve(targetPath, './types/index.d.cts'),
  );
}

clearPackageJson();

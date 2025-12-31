const fs = require('node:fs');
const path = require('node:path');

function postBuild() {
  const projectRoot = process.cwd();
  const json = JSON.parse(
    fs.readFileSync(path.join(projectRoot, 'package.json'), 'utf-8'),
  );

  const isApp = fs.existsSync(path.join(projectRoot, 'Dockerfile'));
  const buildDir = path.join(projectRoot, 'build');

  json.type = 'module';
  if (isApp || !json.publishConfig) json.private = true;
  else delete json.private;
  delete json.scripts;
  delete json.devDependencies;

  fs.writeFileSync(
    path.resolve(buildDir, 'package.json'),
    JSON.stringify(json, undefined, 2),
    'utf-8',
  );
  if (fs.existsSync(path.resolve(projectRoot, 'Dockerfile'))) {
    fs.copyFileSync(
      path.resolve(projectRoot, 'Dockerfile'),
      path.resolve(buildDir, 'Dockerfile'),
    );
  }
  fs.copyFileSync(
    path.resolve('./README.md'),
    path.resolve(buildDir, 'README.md'),
  );
  fs.copyFileSync(
    path.resolve('../../LICENSE'),
    path.resolve(buildDir, 'LICENSE'),
  );

  /** Update version */
  const constantsFile = path.resolve(buildDir, 'constants.js');
  if (fs.existsSync(constantsFile)) {
    let content = fs.readFileSync(constantsFile, 'utf8');
    content = content.replace(`version = '1'`, `version = '${json.version}'`);
    fs.writeFileSync(constantsFile, content, 'utf-8');
  }

  /** Update version in Dockerfile*/
  const dockerFile = path.resolve(projectRoot, 'Dockerfile');
  if (fs.existsSync(dockerFile)) {
    let content = fs.readFileSync(dockerFile, 'utf8');
    content = content.replace(
      /LABEL org.opencontainers.image.version=.+/,
      `LABEL org.opencontainers.image.version="${json.version}"`,
    );
    fs.writeFileSync(dockerFile, content, 'utf-8');
  }
}

postBuild();

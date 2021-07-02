rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M main &&
git remote add origin git@github.com:waynefu2020/sky-ui-web.git &&
git push -f -u origin main &&
cd ..

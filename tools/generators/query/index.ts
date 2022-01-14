import { Tree, generateFiles, joinPathFragments, names } from '@nrwl/devkit';
import { relative } from 'path';
import { omit } from 'lodash';

export default async function (tree: Tree, schema: any) {
  generateFiles(tree, joinPathFragments(__dirname, './files'), relative(tree.root, process.cwd()), {
    tmpl: '',
    ...omit(schema, 'name'),
    ...names(schema.name),  
  });
}

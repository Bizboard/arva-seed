/**
 * Created by tom on 27/06/16.
 */

export default function({ types: t }) {
    return {
        visitor: {
            ClassExpression(path) {
                // if(!global.x){global.x=1;console.log(path);}
                if(path.node.superClass.name === 'Controller') {
                    console.log('Found Controller', path.node.id.name);
                    console.log(path.node.body);
                }
            }
        }
    };
}
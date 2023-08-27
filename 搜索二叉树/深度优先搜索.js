//以一段html结构为例形成一个二叉树，遍历搜索这个 dom 树
{
  /* <div>
      <p>
          hello
          <textarea name="jj" id="" cols="30" rows="10"></textarea>
      </p>
      <img src="" alt="">
      <ul>
          <li>a</li>
          <li>b</li>
      </ul>
  </div> */
}
// 写一个单独的方法来表达遍历到这个节点时的操作
function visitNode(node) {
  // 简单写一下，不完善
  if (node instanceof Text) {
    // 文本节点
    if (node.textContent) console.log(node.textContent);
  }
  if (node instanceof HTMLElement) {
    // html标签
    console.log(node.tagName);
  }
}

/**
 *
 *
 * @param  root 根节点
 */
// 方法一：递归法
function dfs1(root) {
  visitNode(root);
  const childNodes = root.childNodes; // .childNodes 和 .children不一样，前者包含所有子元素
  if (childNodes.length) {
    childNodes.forEach((element) => {
      visitNode(element);
    });
  }
}

//方法二 ： 可以用栈（其实递归的本质也是栈）先进后出
function dfs2(root) {
  // 用数组模拟栈
  const stack = [];
  // 根节点入栈
  stack.push(root);
  while (stack.length > 0) {
    // 出栈
    const currNode = stack.pop();
    if (currNode === undefined) break;
    visitNode(currNode);
    // currNode 的子节点入栈
    const childNodes = currNode.childNodes;
    if (childNodes.length > 0) {
      Array.from(childNodes).forEach((child) => stack.push(child));
    }
  }
}

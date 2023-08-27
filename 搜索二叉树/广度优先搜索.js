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
 * 广度优先搜索 用队列 先进先出
 *
 * @param {*} root
 */
function bfs(root) {
  const queue = []; // 用数组模拟队列
  // 根节点入队列
  queue.push(root);
  while (queue.length) {
    const currNode = queue.shift();
    if (currNode === undefined) break;
    visitNode(currNode);

    // 子节点入队列
    const childNodes = currNode.childNodes;
    Array.from(childNodes).forEach((child) => 
      queue.push(child);
    );
  }
}

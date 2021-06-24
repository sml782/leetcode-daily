
export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(
    val?: number,
    left?: TreeNode | null,
    right?: TreeNode | null
  ) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
  }
}

const root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

export default root;

[3,4,5,-7,-6,null,null,-7,null,-5,null,null,null,-4];

export function generateBT(dataSource: (number | null)[]): TreeNode | null {
  if (dataSource.length === 0) {
    return null;
  }
  
  const mirrorData = [...dataSource];
  let bt: TreeNode | null = null;
  let levelTreeData: (TreeNode | null)[] = [];

  let level = 1;
  while (mirrorData.length) {
    const levelEleNum = 2 ** (level - 1);
    const levelData = mirrorData.splice(0, levelEleNum);

    const curLevelData: (TreeNode | null)[] = [];
    // levelTreeData.forEach((node) => {
    //   const childData = levelData.splice(0, 2);
    //   if (!node) {
    //     return;
    //   }
    //   childData.forEach((item, idx) => {
    //     const curNode = item ? new TreeNode(item) : null;
    //     curLevelData.push(curNode);
    //     node[idx === 0 ? 'left' : 'right'] = curNode;
    //   });
    // });

    let parentIdx = 0;
    levelData.forEach((item, index) => {
      const nextFlag = Math.floor(index % 2);
      const curNode = item ? new TreeNode(item) : null;
      const parentNode = levelTreeData[parentIdx];
      if (nextFlag === 1) {
        parentIdx++;
      }
      curLevelData.push(curNode);
      if (!parentNode) {
        return;
      }
      parentNode[nextFlag === 0 ? 'left' : 'right'] = curNode;
    });

    levelTreeData = curLevelData;

    if (level === 1) {
      bt = levelTreeData[0];
    }
    if (!bt) {
      break;
    }
    level++;
  }

  return bt;
}

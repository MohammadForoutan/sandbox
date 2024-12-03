class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null,
): ListNode | null {
  const visited = new Set<ListNode>()

  for(let curr = headA; curr != null; curr = curr.next) {
    visited.add(curr)
  }

  for(let curr = headB; curr != null; curr = curr.next) {
    if(visited.has(curr)) return curr;
  }

  return null
}

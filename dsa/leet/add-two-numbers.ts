class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null {
  const l3 = new ListNode();
  let current = l3;
  let carry = 0;

  while (l1 || l2 || carry) {
    const v1 = l1 ? l1.val : 0;
    const v2 = l2 ? l2.val : 0;

    let value = v1 + v2 + carry;
    carry = Math.floor(value / 10);
    value = value % 10;
    current.next = new ListNode(value);

    current = current.next;
    l1 = l1 ? l1?.next : null;
    l2 = l2 ? l2?.next : null;
  }

  return l3.next;
}

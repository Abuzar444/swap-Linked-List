class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

let head;

const push = (data) => {
    let newNode = new Node(data);
    newNode.next = head;
    head = newNode;
}

function swapNodes(x, y) {
    // Nothing to do if x and y are same
    if (x == y)
        return;

    // Search for x (keep track of prevX and CurrX)
    var prevX = null, currX = head;
    while (currX != null && currX.val != x) {
        prevX = currX;
        currX = currX.next;
    }

    // Search for y (keep track of prevY and currY)
    var prevY = null, currY = head;
    while (currY != null && currY.val != y) {
        prevY = currY;
        currY = currY.next;
    }

    // If either x or y is not present, nothing to do
    if (currX == null || currY == null)
        return;

    // If x is not head of linked list
    if (prevX != null)
        prevX.next = currY;
    else // make y the new head
        head = currY;

    // If y is not head of linked list
    if (prevY != null)
        prevY.next = currX;
    else // make x the new head
        head = currX;

    // Swap next pointers
    var current = currX.next;
    currX.next = currY.next;
    currY.next = current;
}

const print = () => {
    let current = head;
    while (current != null) {
        console.log(current.val);
        current = current.next;
    }
}

push(1);
push(2);
push(3);
push(4);
push(5);
swapNodes(2, 4)
print()
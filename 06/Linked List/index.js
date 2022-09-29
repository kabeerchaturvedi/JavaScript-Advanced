## Reverse in ES6 : 

var reverseList = function(head) {
    let [prev, current] = [null, head]
    while(current) {
        [current.next, prev, current] = [prev, current, current.next]
    }
    return prev
}


## Normal Method: 

var reverseList = function(head) {
    let prev = null, cur = head, next = null;
    while (cur != null) {
        next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }
    return prev;
};

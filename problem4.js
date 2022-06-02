

function oddFriend(friends) {

    if (typeof friends == 'object') {

    } else {
        console.log('stop');
        return
    }

    for (i = 0; i < friends.length; i++) {
        let element = friends[i];

        if (element.length % 2 == 1) {
            return element;
        }
    }
}

let friends = ['abid', 'lipa', 'pushpa', 'ana', 'morol', 'rishi', 'eshita', 'tasnim'];
let findMyBestFriend = oddFriend(friends);




if (typeof findMyBestFriend == 'string') {
    console.log(findMyBestFriend)
}
else {
}
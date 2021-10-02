class Solution {

    noOfOpenDoors(N){
        //code here
        let s = Math.sqrt(N);
        let f = Math.floor(s);
        let c = Math.ceil(s);
        if (f < c) return f;
        return c;
    }
}



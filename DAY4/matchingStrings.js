    /**
     * 
     * @param {*} input1 
     * @param {*} input2 
     * @returns Boolean
     * Check whether second string can be formed from characters of first string
     */
    
    function isPermutation(input1, input2)
    {
        let count = new Array(1000);
        count.fill(0);

        for (let i = 0; i < input1.length; i++)
            count[input1[i]]++;
   
        for (let i = 0; i < input2.length; i++) {
            if (count[input2[i]] == 0)
                return false;
            count[input2[i]]--
        }
        return true;
    }
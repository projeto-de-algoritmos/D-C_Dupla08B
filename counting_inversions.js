class CountingInversions {
    
    divide_list(list) {  // O(1)

    }

    sort_and_count(list) {
        let total = 0;

        if(list.length == 0)
            return {
                first: 0,
                second: list
            };

        const { left, right } = this.divide_list(list);

        const { r_left, A } = this.sort_and_count(left);
        const { r_right, B } = this.sort_and_count(left);
        const { r, L } = this.merge_and_count(A, B);

        return {
            first: r = r_left + r_right + r,
            second: L
        };
    }

    merge_and_count(list_a, list_b) {
        let aux = [];
        let inversions = 0;

        


    }
}

const ci = new CountingInversions();
const { first, second } = ci.sort_and_count([]);
console.log(first);
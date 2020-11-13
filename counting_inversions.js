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
        let index_a;
        let index_b = 0;
        
        for(index_a = 0; index_a < list_a.length && index_b < list_b.length; ++index_a) { // tempo linear
           
            if(list_a[index_a] > list_b[index_b]) {
                console.log(list_a[index_a] + ' => ' + list_b[index_b])
                inversions += (list_a.length - index_a);
                aux.push(list_b[index_b++]);
                console.log(inversions);
                console.log(aux)
                --index_a;
            }
            else {
                console.log(list_a[index_a] + ' => ' + list_b[index_b])
                aux.push(list_a[index_a]);
                console.log(aux)
            }

            console.log('a => ' + index_a);
            console.log('b => ' + index_b);
            
        }

        for(let i = index_a; i < list_a.length; ++i) { // + tempo linear
            aux.push(list_a[i]);
        }
        for(let i = index_b; i < list_b.length; ++i) { // + tempo linear == O(n + m + o) == O(n)
            aux.push(list_b[i]);
        }


        return {
            inversions: inversions,
            list: aux
        }




    }
}

const ci = new CountingInversions();
const { first, second } = ci.sort_and_count([]);
const result = ci.merge_and_count([3, 7, 10, 14, 18, 19], [2, 11, 16, 17, 23, 25]);

console.log(result);
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
        let index_a = list_a.length - 1;
        let index_b = 0;
        
        for(let i = 0; i <= list_a.length && index_b < list_b.length; ++i) {
            console.log('A index aqui ====> ', i)
            console.log('B index aqui ====> ', index_b)

            if(i == list_a.length && index_b < list_b.length) {
                aux.push(list_b[index_b++]);
                --i;
            }
           
            else if(list_a[i] > list_b[index_b]) {
                console.log(list_a[i] + ' => ' + list_b[index_b])
                inversions += (list_a.length - i);
                aux.push(list_b[index_b++]);
                console.log(inversions);
                console.log(aux)
                --i;
            }
            else {
                console.log(list_a[i] + ' => ' + list_b[index_b])
                aux.push(list_a[i]);
                console.log(aux)
            }
            
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
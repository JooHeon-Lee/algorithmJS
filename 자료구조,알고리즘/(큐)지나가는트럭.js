function solution(bridge_length, weight, truck_weights) {
    let answer = 0;
    let bridge = new Array(bridge_length).fill(0);
    
    while(bridge.length){
        answer ++;
        bridge.shift();
        if(truck_weights.length){ // 올릴 트럭이 남아있다면
            let truck = truck_weights[0];
            const total_weight = bridge.reduce((acc, val) => acc + val, 0);
            
            if(truck + total_weight <= weight){
                bridge.push(truck_weights.shift());
            }else{
                bridge.push(0);
            }
        }
    }
    
    return answer;
}
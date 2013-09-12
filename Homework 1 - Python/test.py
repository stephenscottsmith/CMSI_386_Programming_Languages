def powers_of_two (number) :
    results, power = [], 0
    while pow(2, power) <= number :
        results.append(pow(2, power))
        power = power + 1
    
    return results 

print powers_of_two(8)

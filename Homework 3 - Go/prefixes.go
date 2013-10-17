package main 

import (
	"fmt"
	"os"
)

func main() {
	stringToPrefix := os.Args[1]
	fmt.Println(stringToPrefix[0])
	for i := 0; i <= len(stringToPrefix); i++ {
		fmt.Println(stringToPrefix[0:i])
	}
}


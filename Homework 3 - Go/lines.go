package main 

import (
	"fmt"
	"os"
	"bufio"
	"log"
	"strings"
)

func main () {
	filename, error := os.Open(os.Args[1])
	scanner := bufio.NewScanner(filename)
	numberOfLines := 0

	if error != nil {
		log.Fatal(error)
	}
	
	for scanner.Scan() {
		lines := strings.TrimSpace(scanner.Text())
		if lines != "" && lines[0] != '#' {
			numberOfLines += 1
		}
	}

	fmt.Println(numberOfLines)
}

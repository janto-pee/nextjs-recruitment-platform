package main

import (
	"fmt"
)

func main() {
    arr := []int{1, 3, 2, 6, -1, 4, 1, 8, 2}
    // K:=5

    for  i:=0; i < len(arr); i+=1 {
        fmt.Println("normal ", arr[i])
    }
	fmt.Println("Hello")
}

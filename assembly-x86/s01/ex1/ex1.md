int 0x80 -> interrupt with hex code 80 run syscall with data that in eax register

```bash
$ nasm -f elf32 ex1.asm -o ex1.o
ld -m elf_i386 ex1.o -o ex1
./ex1
echo $?
```

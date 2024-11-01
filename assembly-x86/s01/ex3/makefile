
nasm:
	nasm -f elf32 ex3.asm -o ex3.o

ld:
	ld -m elf_i386 ex3.o -o ex3

execute:
	./ex3

run: nasm ld execute


nasm:
	nasm -f elf32 ex4.asm -o ex4.o

ld:
	ld -m elf_i386 ex4.o -o ex4

execute:
	./ex4

run: nasm ld execute

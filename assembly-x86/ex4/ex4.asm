global _start

section .text
_start:
    mov ebx, 42
    mov eax, 1
    jmp skip
    mov ebx, 13
skip:
    int 0x80
    
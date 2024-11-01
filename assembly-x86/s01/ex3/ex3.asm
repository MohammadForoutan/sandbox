global _start

; Data section
section .data
    msg db "Hello, World!", 0x0a ; 0x0a is the newline character
    len equ $ - msg ; calculate the length of the message


; Code section
section .text
_start:
    ; Write the message to stdout
    mov eax, 4          ; syscall number for write
    mov ebx, 1          ; file descriptor for stdout
    mov ecx, msg        ; pointer to the message
    mov edx, len        ; length of the message
    int 0x80            ; interrupt to invoke the kernel

    ; Exit the program
    mov eax, 1          ; syscall number for exit
    xor ebx, ebx        ; exit code 0
    int 0x80            ; interrupt to invoke the kernel
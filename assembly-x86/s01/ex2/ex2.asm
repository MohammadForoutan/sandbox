global _start

_start:
    mov eax, 9      ; Load the value 9 into the eax register
    mov ebx, 6      ; Load the value 6 into the ebx register
    mul ebx         ; Multiply eax by ebx, result stored in eax
    mov ebx, eax    ; Store the result in ebx for sys_exit
    mov eax, 1      ; sys_exit system call number (1)
    int 0x80        ; Interrupt 0x80 to invoke the kernel's system call handler
                    ; For sys_exit: eax = 1 (syscall number), ebx = exit status

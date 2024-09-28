    .section .text
    .globl _start

_start:
    li a0, 1          # Load 1 into a0 (file descriptor for stdout)
    la a1, msg        # Load address of msg into a1
    li a2, 13         # Load length of msg into a2
    ecall             # Make system call to print message
    li a0, 10         # Load 10 into a0 (exit code)
    ecall             # Exit the program

.section .data
msg:    .asciz "Hello, RISC-V!\n"

import * as vscode from 'vscode';
import { exec } from 'child_process';
import * as path from 'path';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('extension.runRiscv', () => {
        const riscvFilePath = path.join(context.extensionPath, 'src', 'riscv', 'code.s');
        exec(`riscv64-unknown-elf-gcc ${riscvFilePath} -o output && qemu-riscv64 output`, (error, stdout, stderr) => {
            if (error) {
                vscode.window.showErrorMessage(`Error: ${stderr}`);
                return;
            }
            vscode.window.showInformationMessage(`Output: ${stdout}`);
        });
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}

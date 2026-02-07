import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
	console.log(vscode.l10n.t("Antigravity Mode Toggle is now active!"));

	// Register switchToFast command
	const fastCommand = vscode.commands.registerCommand(
		"antigravity-toggle.switchToFast",
		async () => {
			try {
				// First, try updating configuration if available
				const config = vscode.workspace.getConfiguration("antigravity");
				await config.update(
					"agentMode",
					"fast",
					vscode.ConfigurationTarget.Global,
				);
				vscode.window.setStatusBarMessage(
					vscode.l10n.t("Antigravity: Switched to Fast Mode"),
					3000,
				);
			} catch (error) {
				console.error(error);
				// Fallback: try executing a command if the setting update fails or isn't enough
				try {
					await vscode.commands.executeCommand("antigravity.switchToFast");
				} catch {
					vscode.window.showErrorMessage(
						vscode.l10n.t(
							"Failed to switch to Fast Mode. specific internal command not found.",
						),
					);
				}
			}
		},
	);

	// Register switchToPlanning command
	const planningCommand = vscode.commands.registerCommand(
		"antigravity-toggle.switchToPlanning",
		async () => {
			try {
				const config = vscode.workspace.getConfiguration("antigravity");
				await config.update(
					"agentMode",
					"planning",
					vscode.ConfigurationTarget.Global,
				);
				vscode.window.setStatusBarMessage(
					vscode.l10n.t("Antigravity: Switched to Planning Mode"),
					3000,
				);
			} catch (error) {
				console.error(error);
				try {
					await vscode.commands.executeCommand("antigravity.switchToPlanning");
				} catch {
					vscode.window.showErrorMessage(
						vscode.l10n.t(
							"Failed to switch to Planning Mode. specific internal command not found.",
						),
					);
				}
			}
		},
	);

	context.subscriptions.push(fastCommand);
	context.subscriptions.push(planningCommand);
}

export function deactivate() {}

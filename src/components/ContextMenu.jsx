import React from "react";

export default function ContextMenu({
	menuPosition,
	setMenuPosition,
	setExpenses,
	expenses,
	setExpenseForm,
	rowId,
	setEditingRowId
}) {
	if (!menuPosition.left) return;
	return (
		<div className="context-menu" style={menuPosition}>
			<div
				onClick={() => {
					const {title , category , amount} = expenses.find((item) => item.id === rowId);
					setExpenseForm({title , category , amount});
					setEditingRowId(rowId);
					setMenuPosition({});
				}}
			>
				Edit
			</div>
			<div
				onClick={() => {
					setMenuPosition({});
					setExpenses((prevState) =>
						prevState.filter((item) => item.id !== rowId)
					);
				}}
			>
				Delete
			</div>
		</div>
	);
}

<template>
	<div class="container">
		<h1>TODO LIST</h1>

		<div class="input-wrapper">
			<img src="./assets/todo.svg" />
			<input
				type="text"
				placeholder="Enter your next task"
			/>
		</div>

		<div class="todo-list-wrapper"></div>
	</div>
</template>

<style lang="scss">
* {
	padding: 0;
	margin: 0;
}
.container {
	position: relative;
	background: linear-gradient(#fdcedf, #f9f5f6);
	width: 100%;
	height: 100vh;
	overflow: auto;
}

h1 {
	margin-top: 100px;
	color: #fff;
	letter-spacing: 0.5rem;
	font-size: 36px;
	line-height: 36px;
	font-weight: normal;
	text-align: center;
}

.input-wrapper {
	position: relative;
	width: 60%;
	height: 55px;
	margin: 40px auto;

	img {
		position: absolute;
		top: 10px;
		left: 20px;
		width: 32px;
		height: 32px;
	}

	input {
		width: 100%;
		height: 100%;
		padding-left: 70px;
		outline: none;
		border: none;
		border-radius: 5px;
		font-size: 24px;
		color: #ff9494;
	}
}

.todo-list-wrapper {
	width: 60%;
}
</style>

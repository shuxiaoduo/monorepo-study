describe('描述', () => {
	before(() => console.log('---- Test Start! ----'));
	beforeEach(() => cy.visit('https://www.baidu.com'));
	afterEach(() => cy.clearCookies());

	it('测试用户交互', () => {
		cy.contains('百度一下').should('be.exist');
	});

	// it('测试显示文本', () => {
	// 	cy.get('div').should('have.text', 'Hello');
	// 	// * 另一种风格
	// 	cy.get('div').should(($div) => {
	// 		const text = $div.text();
	// 		expect(text).to.match(/hello/i);
	// 	});
	// });
});

('');

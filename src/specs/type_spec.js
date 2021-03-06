'use strict';

const Type = require('../type');

xdescribe('specs for Type.Cycle', function() {
	let testCycle = new Type.Cycle(); 
	it('should behave Type defined', function() {
		expect(testCycle).toBeDefined();
	});
	it('should behave such that health is 60', function() {
		expect(testCycle.health).toEqual(60);
	});
	it('should have predefined turns of 3', function() {
		expect(testCycle.turns).toEqual(3);	
	});	
	it('should have predefiend weapon count of 2', function() {
		console.log(testCycle);
		expect(testCycle.weaponsCapacity).toEqual(2);
	});
	it('should have predefined armor of 0', function() {
		expect(testCycle.armor).toEqual(0);
	});
});

xdescribe('specs for Type.Tank', function() {
	let testTank = new Type.Tank(); 
	it('should behave Type defined', function() {
		expect(testTank).toBeDefined();
	});
	it('should have predefined turns of 3', function() {
		expect(testTank.turns).toEqual(1);	
	});	
	it('should have predefiend weapon count of 2', function() {
		expect(testTank.weaponsCapacity).toEqual(6);
	});
	it('should have predefined armor of 0', function() {
		expect(testTank.armor).toEqual(2);
	});
});

xdescribe('specs for Type.Jeep', function() {
	let testJeep = new Type.Jeep(); 
	it('should behave Type defined', function() {
		expect(testJeep).toBeDefined();
	});
	it('should have predefined turns of 3', function() {
		expect(testJeep.turns).toEqual(2);	
	});	
	it('should have predefiend weapon count of 2', function() {
		expect(testJeep.weaponsCapacity).toEqual(4);
	});
	it('should have predefined armor of 0', function() {
		expect(testJeep.armor).toEqual(1);
	});
});
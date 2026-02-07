
const C3 = globalThis.C3;

C3.Behaviors.InstanceObject.Instance = class InstanceObjectInstance_C3 extends globalThis.ISDKBehaviorInstanceBase
{
	constructor()
	{
		super();
		
		this.name = "";
		this.bindObject = "";
		
		const properties = this._getInitProperties();
		if (properties)
		{
			this.name = properties[0];
			this.bindObject = properties[1];

		}
		
		// Opt-in to getting calls to _tick()
		//this._setTicking(true);
	}

	_release()
	{
		super._release();
	}
	
	setName(name){
		this.name = name;
	}
	
	_saveToJson()
	{
		return {
			"name" : this.name,
			"bindObject" : this.bindObject
		};
	}

	_loadFromJson(o)
	{
		this.name = o["name"];
		this.bindObject = o["bindObject"];
	}
	
	/*
	_tick()
	{
		const dt = this.instance.dt;
		
		// ... code to run every tick for this behavior ...
	}
	*/
};
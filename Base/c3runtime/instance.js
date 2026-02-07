
const C3 = globalThis.C3;

C3.Plugins.NagaBase.Instance = class NagaBaseInstance_C3 extends globalThis.ISDKInstanceBase
{
	constructor()
	{
		super();
		

		const properties = this._getInitProperties();
		if (properties)		// note properties may be null in some cases
		{
			
		}
	}

	Initialise()
	{
			console.log("Naga Base Initialized!");
	}

	
	_release()
	{
		super._release();
	}

	
	
	_saveToJson()
	{
		return {
			// data to be saved for savegames
		};
	}
	
	_loadFromJson(o)
	{
		// load state for savegames
	}
};
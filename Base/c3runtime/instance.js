
const C3 = globalThis.C3;

C3.Plugins.Naga_Base.Instance = class NagaBaseInstance extends globalThis.ISDKInstanceBase
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

const C3 = globalThis.C3;

C3.Plugins.NagaBase.Acts =
{
	LogToConsole()
	{
		console.log("This is the 'Log to console' action. Test property = " + this._getTestProperty());
	}
};

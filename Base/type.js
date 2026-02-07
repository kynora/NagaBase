
const SDK = globalThis.SDK;

const PLUGIN_CLASS = SDK.Plugins.NagaBase;

PLUGIN_CLASS.Type = class NagaBaseType extends SDK.ITypeBase
{
	constructor(sdkPlugin, iObjectType)
	{
		super(sdkPlugin, iObjectType);
	}
};

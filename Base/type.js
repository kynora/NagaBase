
const SDK = globalThis.SDK;

const PLUGIN_CLASS = SDK.Plugins.Naga_Base;

PLUGIN_CLASS.Type = class NagaBasePluginType extends SDK.ITypeBase
{
	constructor(sdkPlugin, iObjectType)
	{
		super(sdkPlugin, iObjectType);
	}
};


const SDK = globalThis.SDK;

const BEHAVIOR_CLASS = SDK.Behaviors.Naga_IntObject;

BEHAVIOR_CLASS.Type = class NagaIntObjectType extends SDK.IBehaviorTypeBase
{
	constructor(sdkPlugin, iBehaviorType)
	{
		super(sdkPlugin, iBehaviorType);
	}
};

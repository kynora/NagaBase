
const SDK = globalThis.SDK;

const BEHAVIOR_CLASS = SDK.Behaviors.InstanceObject;

BEHAVIOR_CLASS.Type = class NagaInsObjectType extends SDK.IBehaviorTypeBase
{
	constructor(sdkPlugin, iBehaviorType)
	{
		super(sdkPlugin, iBehaviorType);
	}
};

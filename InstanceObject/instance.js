
const SDK = globalThis.SDK;

const BEHAVIOR_CLASS = SDK.Behaviors.Naga_IntObject;

BEHAVIOR_CLASS.Instance = class NagaIntObjectInstance extends SDK.IBehaviorInstanceBase
{
	constructor(sdkBehType, behInst)
	{
		super(sdkBehType, behInst);
	}
	
	Release()
	{
	}
	
	OnCreate()
	{
	}
	
	OnPropertyChanged(id, value)
	{
	}
	
	LoadC2Property(name, valueString)
	{
		return false;		// not handled
	}
};

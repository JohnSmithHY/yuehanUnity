#ifdef __OBJC__
#import <UIKit/UIKit.h>
#else
#ifndef FOUNDATION_EXPORT
#if defined(__cplusplus)
#define FOUNDATION_EXPORT extern "C"
#else
#define FOUNDATION_EXPORT extern
#endif
#endif
#endif

#import "UIImage+Unity.h"
#import "UnityConfig.h"
#import "yuehanLogUnity.h"

FOUNDATION_EXPORT double yuehanUnityVersionNumber;
FOUNDATION_EXPORT const unsigned char yuehanUnityVersionString[];


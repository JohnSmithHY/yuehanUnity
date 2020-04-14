//
//  yuehanLogUnity.h
//  yuehanUnity
//
//  Created by John on 2020/4/15.
//

#import <Foundation/Foundation.h>

@protocol LogUnityPrintDelegate <NSObject>

- (void)printNewLogModule:(NSString *)className;

@end

NS_ASSUME_NONNULL_BEGIN

@interface yuehanLogUnity : NSObject
@property (nonatomic, weak) id <LogUnityPrintDelegate>delegate;
- (void)logUnity;
@end

NS_ASSUME_NONNULL_END

//
//  yuehanLogUnity.m
//  yuehanUnity
//
//  Created by John on 2020/4/15.
//

#import "yuehanLogUnity.h"
#import <AFNetworking/AFNetworking.h>

@implementation yuehanLogUnity
- (void)logUnity {
    NSLog(@"logName");
    if (self.delegate && [self.delegate respondsToSelector:@selector(printNewLogModule:)]) {
        [self.delegate printNewLogModule:NSStringFromClass(self.class)];
    }
}



@end

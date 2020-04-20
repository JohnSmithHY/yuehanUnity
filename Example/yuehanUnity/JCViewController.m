//
//  JCViewController.m
//  yuehanUnity
//
//  Created by yangguangweilou@163.com on 04/14/2020.
//  Copyright (c) 2020 yangguangweilou@163.com. All rights reserved.
//

#import "JCViewController.h"
#import <UIImage+Unity.h>
@interface JCViewController ()

@end

@implementation JCViewController

- (void)viewDidLoad
{
    [super viewDidLoad];
    UIImage *image = [UIImage unity_imageNamed:@"saomiao" size:CGSizeMake(100, 100)];
	// Do any additional setup after loading the view, typically from a nib.
}

- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

@end

// @ts-nocheck
/**
 * Argo Workflows API
 * Argo Workflows is an open source container-native workflow engine for orchestrating parallel jobs on Kubernetes. For more information, please see https://argoproj.github.io/argo-workflows/
 *
 * The version of the OpenAPI document: VERSION
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { IoArgoprojEventsV1alpha1BitbucketBasicAuth } from './ioArgoprojEventsV1alpha1BitbucketBasicAuth';
import { IoK8sApiCoreV1SecretKeySelector } from './ioK8sApiCoreV1SecretKeySelector';

export class IoArgoprojEventsV1alpha1BitbucketAuth {
    'basic'?: IoArgoprojEventsV1alpha1BitbucketBasicAuth;
    'oauthToken'?: IoK8sApiCoreV1SecretKeySelector;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "basic",
            "baseName": "basic",
            "type": "IoArgoprojEventsV1alpha1BitbucketBasicAuth"
        },
        {
            "name": "oauthToken",
            "baseName": "oauthToken",
            "type": "IoK8sApiCoreV1SecretKeySelector"
        }    ];

    static getAttributeTypeMap() {
        return IoArgoprojEventsV1alpha1BitbucketAuth.attributeTypeMap;
    }
}

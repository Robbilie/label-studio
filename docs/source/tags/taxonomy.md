---
title: Taxonomy
type: tags
order: 426
meta_title: Taxonomy Tag for Hierarchical Labels
meta_description: Customize Label Studio with the Taxonomy tag and use hierarchical labels for machine learning and data science projects.
---

The `Taxonomy` tag is used to create one or more hierarchical classifications, storing both choice selections and their ancestors in the results. Use for nested classification tasks with the `Choice` tag.

Use with the following data types: audio, image, HTML, paragraphs, text, time series, video.

[^1]: `fflag_feat_front_lsdv_4583_multi_image_segmentation_short` should be enabled for `perItem` functionality

[^2]: `fflag_feat_front_lsdv_5451_async_taxonomy_110823_short` should be enabled to load items from `apiUrl` asynchronously

### Parameters

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| name | <code>string</code> |  | Name of the element |
| toName | <code>string</code> |  | Name of the element that you want to classify |
| [apiUrl] | <code>string</code> |  | URL to fetch taxonomy from remote source; API should accept optional array `path` param: `apiUrl?path[]=root&path[]=child1` to return only nested children of `child1` node[^2] |
| [leafsOnly] | <code>boolean</code> | <code>false</code> | Allow annotators to select only leaf nodes of taxonomy |
| [showFullPath] | <code>boolean</code> | <code>false</code> | Whether to show the full path of selected items |
| [pathSeparator] | <code>string</code> | <code>&quot;/&quot;</code> | Separator to show in the full path |
| [maxUsages] | <code>number</code> |  | Maximum number of times a choice can be selected per task |
| [maxWidth] | <code>number</code> |  | Maximum width for dropdown |
| [minWidth] | <code>number</code> |  | Minimum width for dropdown |
| [required] | <code>boolean</code> | <code>false</code> | Whether taxonomy validation is required |
| [requiredMessage] | <code>string</code> |  | Message to show if validation fails |
| [placeholder=] | <code>string</code> |  | What to display as prompt on the input |
| [perRegion] | <code>boolean</code> |  | Use this tag to classify specific regions instead of the whole object |
| [perItem] | <code>boolean</code> |  | Use this tag to classify specific items inside the object instead of the whole object[^1] |

### Example

Labeling configuration for providing a taxonomy of choices in response to a passage of text

```html
<View>
  <Taxonomy name="media" toName="text">
    <Choice value="Online">
      <Choice value="UGC" />
      <Choice value="Free" />
      <Choice value="Paywall">
        <Choice value="NY Times" />
        <Choice value="The Wall Street Journal" />
      </Choice>
    </Choice>
    <Choice value="Offline" />
  </Taxonomy>
  <Text name="text" value="You'd never believe what he did to the country" />
</View>
```
